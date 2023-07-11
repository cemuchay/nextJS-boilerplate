/**
 * Validates the properties of an object based on the provided instructions and returns error messages for failed validations.
 * @template T - The type of the object to validate.
 * @param {T} data - The object to validate.
 * @param {ValidationInstructions<T>} instructions - The instructions for validating the properties.
 * @returns {string[]} - An array of error messages for failed validations, empty if all properties pass validation.
 */

type ValidationInstructions<T> = {
   [K in keyof T]: {
      required?: boolean;
      type?: string;
      minLength?: number;
      maxLength?: number;
      pattern?: RegExp;
      validate?: (value: T[K]) => boolean;
   };
};

function validateObject<T>(
   data: T,
   instructions: ValidationInstructions<T>
): string[] {
   const errors: string[] = [];

   //    console.log(instructions, 1);

   for (const key in instructions) {
      //   console.log(key, 2);
      //   console.log(instructions[key], 3);
      const validation = instructions[key];
      const value = data[key];

      if (
         validation.required &&
         (value == null || (typeof value === "string" && value === ""))
      ) {
         errors.push(`Property '${key}' is required.`);
      }

      if (validation.type && typeof value !== validation.type) {
         errors.push(`Property '${key}' must be of type '${validation.type}'.`);
      }

      if (validation.minLength && String(value).length < validation.minLength) {
         errors.push(
            `Property '${key}' must have a minimum length of ${validation.minLength}.`
         );
      }

      if (validation.maxLength && String(value).length > validation.maxLength) {
         errors.push(
            `Property '${key}' must have a maximum length of ${validation.maxLength}.`
         );
      }

      if (validation.pattern && !validation.pattern.test(String(value))) {
         errors.push(`Property '${key}' does not match the required pattern.`);
      }

      if (validation.validate && !validation.validate(value)) {
         errors.push(`Property '${key}' failed custom validation.`);
      }
   }

   return errors;
}

export default validateObject;
