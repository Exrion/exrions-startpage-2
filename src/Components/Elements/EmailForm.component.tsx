import { Box } from "@mui/system";
import emailjs from '@emailjs/browser';
import { Button, Fade, Modal, Stack, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { FormModalBoxSx } from "../../Styles/Elements/Portfolio/ContactPageStyles";
import { LoadingButton } from "@mui/lab";

const controlWidth = {
    md: 0.75,
    sm: 0.85,
    xs: 1
}

export default function EmailForm() {
    const formElement = useRef<HTMLFormElement>(null);
    const [sendButtonState, setSendButtonState] = useState(false);
    const [modalTitle, setModalTitle] = useState("You should not see this title");
    const [modalText, setModalText] = useState("");
    const [modalState, setModalState] = useState(false);
    const EMAILJS_SERVICEID = process.env.REACT_APP_EMAILJS_SERVICEID;
    const EMAILJS_TEMPLATEID = process.env.REACT_APP_EMAILJS_TEMPLATEID;
    const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const handleClose = () => {
        setModalState(false);

        // Reset Form
        setSendButtonState(false);
        formElement.current!.reset();
        window.location.reload();
    }

    const resultModal = () => {
        return (
            <>
                <Modal
                    open={modalState}
                    onClose={() => handleClose()}
                    closeAfterTransition
                    disableAutoFocus
                >
                    <Fade
                        in={modalState}
                        timeout={800}
                    >
                        <Box
                            sx={FormModalBoxSx}
                        >
                            <Stack
                                spacing={1}
                            >
                                <Typography variant="h6" textAlign='center'>
                                    {modalTitle}
                                </Typography>
                                <Typography variant="body1" textAlign='center'>
                                    {modalText}
                                </Typography>
                            </Stack>
                            <Button
                                variant="contained"
                                sx={{ mt: 2 }}
                                onClick={() => handleClose()}
                            >
                                Close
                            </Button>
                        </Box>
                    </Fade>
                </Modal>
            </>
        );
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSendButtonState(true);

        emailjs.sendForm(EMAILJS_SERVICEID!, EMAILJS_TEMPLATEID!, formElement.current!, EMAILJS_PUBLIC_KEY!)
            .then((result) => {
                if (result.status !== 200) {
                    setModalTitle('Form could not be submitted!');
                    setModalText(`${result.status} - ${result.text}`);
                }
                setModalTitle('Email Sent Successfully');
            }, (error) => {
                setModalText(error.text);
            })
            .finally(() => {
                setModalState(true);
            });
    }

    return (
        <>
            {resultModal()}
            <Box
                py={2}
            >
                <form
                    ref={formElement}
                    onSubmit={(e) => onSubmit(e)}
                >
                    <Stack
                        spacing={2}
                        display='flex'
                        direction='column'
                        justifyContent='center'
                        alignItems='center'
                    >
                        <TextField
                            name="from_name"
                            label="Name"
                            required
                            sx={{ width: controlWidth }}
                        />
                        <TextField
                            name="from_orgname"
                            label="Organisation"
                            sx={{ width: controlWidth }}
                        />
                        <TextField
                            name="from_regarding"
                            label="Regarding"
                            required
                            sx={{ width: controlWidth }}
                        />
                        <TextField
                            name="from_contact"
                            label="Contact Information"
                            required
                            sx={{ width: controlWidth }}
                        />
                        <TextField
                            name="message"
                            label="Message"
                            required
                            sx={{ width: controlWidth }}
                            multiline
                            minRows={6}
                        />
                        <LoadingButton
                            variant="contained"
                            type="submit"
                            loading={sendButtonState}
                        >
                            <span>Send Email</span>
                        </LoadingButton>
                    </Stack>
                </form>
            </Box>
        </>
    );
}