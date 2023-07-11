import { Row, Col, Button } from "react-bootstrap";
import ClipboardJS from "clipboard";
import { useRef } from "react";

const TextAreaElement = ({
    value,
    stateChanger,
    title,
    btnText,
    btnFunc,
    placeholder,
    readOnly,
    id,
    split,
}: {
    value: string;
    stateChanger?: (value: string) => void;
    title: string;
    btnText: string;
    btnFunc: Function;
    placeholder?: string;
    readOnly: boolean;
    id?: string;
    split?: boolean;
}) => {
    const clipboardRef = useRef(null);

    const copyToClipboard = (text: string) => {
        // @ts-ignore
        clipboardRef.current = new ClipboardJS("#copy-button", {
            text: () => text,
        });

        // @ts-ignore
        clipboardRef.current.on("success", () => {
            alert("Text copied to clipboard");
            // @ts-ignore
            clipboardRef.current.destroy();
        });

        // @ts-ignore
        clipboardRef.current.on("error", (e: any) => {
            alert(`Failed to copy text: , ${e}`);
            // @ts-ignore
            clipboardRef.current.destroy();
        });

        // @ts-ignore
        clipboardRef.current.onClick(event);
    };

    return (
        <>
            <Row className="mt-3 justify-content-center">
                <Col xs={10} sm={split ? 5 : 10} md={4}>
                    <p className="text-white text-center h4 m-2 mb-4">{title}</p>
                    <textarea
                        style={{ width: "100%", height: "50vh" }}
                        name=""
                        value={value}
                        readOnly={readOnly}
                        id={id}
                    ></textarea>
                </Col>
            </Row>
            <Row className="mt-2 mb-4 justify-content-center">
                <Col className="text-center" xs={10} sm={5} md={4}>
                    <Button
                        id="copy-button"
                        className="pb-2 w-100 btn-danger"
                        variant="danger"
                        onClick={() => {
                            if (btnFunc) {
                                btnFunc();
                            } else {
                                copyToClipboard(value);
                            }
                        }}

                    >
                        {btnText}
                    </Button>
                </Col>
            </Row>
        </>
    );
};

export default TextAreaElement;
