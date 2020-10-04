import Fab from "@material-ui/core/Fab";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AssistantIcon from '@material-ui/icons/Assistant';
import SendIcon from '@material-ui/icons/Send';
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
    icon: {
        zIndex: 10,
        position: 'fixed',
        right: theme.spacing(3),
        bottom: theme.spacing(3),
    },
    chatBox: {
        zIndex: 10,
        position: 'fixed',
        right: theme.spacing(3),
        bottom: theme.spacing(12),
        width: '300px',
        height: '500px',
        backgroundColor: '#FFF',
        boxShadow: '0px 0px 33px -4px rgba(0,0,0,0.75)',
        borderRadius: '5px',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px'
    },
    chatTitle: {
        height: '40px',
        fontSize: '1.25em',
        backgroundColor: '#3468BC',
        color: '#FFF',
        padding: theme.spacing(1),
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px'
    },
    chatBody: {
        height: '420px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#d3d3d3',
        paddingTop: '10px',
        paddingBottom: '15px',
        overflowY: 'scroll'
    },
    message: {
        backgroundColor: '#FFF',
        padding: theme.spacing(1),
        marginTop: '3px',
        marginBottom: '3px',
        marginRight: '50px',
        marginLeft: '5px',
        borderRadius: '5px'
    },
    chatBottom: {
        position: 'relative',
        bottom: 0,
        height: '40px',
        display: 'flex',
        borderTop: '1px solid rgba(0, 0, 0, 0.12)'
    },
    chatInput: {
        width: '260px',
        border: 'none',
        borderBottomLeftRadius: '10px'
    },
    chatSendButton: {
        display: 'flex',
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '40px',
        borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
    },
    chatLoading: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
}));

const ChatBot = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const [inputMessage, setInputMessage] = React.useState("");
    const [isFetching, setIsFetching] = React.useState(false);
    const [fetchResponse, setFetchResponse] = React.useState(null);
    const [messageHistory, setMessageHistory] = React.useState([
        {
            message: 'Hello, my name is Annie! What can I do for you?',
            sender: 'bot'
        },
    ]);

    const inputRef = React.useRef(null);
    const messageBodyRef = React.useRef(null);

    React.useEffect(() => {
        if(fetchResponse) {
            let found = false;
            for(let answer of fetchResponse.answers) {
                if(answer.score >= 60) {
                    addMessageToChat({
                        message: answer.answer,
                        sender: 'bot'
                    });
                    found = true;
                }
            }
            if(!found) {
                addMessageToChat({
                    message: 'Ops! I don\'t understand what you said. Could you rephrase it? or come back later?',
                    sender: 'bot'
                })
            }
            setIsFetching(false);
            setFetchResponse(null);
        }
    }, [fetchResponse]);

    React.useEffect(() => {
        if(!isFetching) {
            inputRef.current.focus();
        }
    }, [isFetching]);

    React.useEffect(() => {
        scrollToBottom();
    }, [messageHistory]);

    const sendMessage = () => {
        if(isFetching) return;
        addMessageToChat({
            message: inputMessage,
            sender: 'user'
        });
        fetch("https://rebornway.azurewebsites.net/qnamaker/knowledgebases/baa28235-4d2d-4fb2-b112-4cbad23250c6/generateAnswer", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'EndpointKey aa2e915f-9680-4daf-ab20-7ce09f24c932'
            },
            body: JSON.stringify({
                question: inputMessage
            })
        }).then((data) => {
            return data.json();
        }).then((data) => {
            setFetchResponse(data);
        });
        setIsFetching(true);
        setInputMessage("");
    };

    const onInputChange = (event) => {
        setInputMessage(event.target.value);
    };

    const addMessageToChat = (message) => {
      let messages = [...messageHistory];
      messages.push(message);
      setMessageHistory(messages);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    const scrollToBottom = () => {
        const scrollHeight = messageBodyRef.current.scrollHeight;
        const height = messageBodyRef.current.clientHeight;
        const maxScrollTop = scrollHeight - height;
        messageBodyRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    };

    return <div>
        <div className={classes.chatBox}
            style={{
                display: open ? 'block' : 'none'
            }}
        >
            <div className={classes.chatTitle}>
                Annie
            </div>
            <div className={classes.chatBody} ref={messageBodyRef}>
                {
                    messageHistory.map((obj) => {
                        return <div
                            style={obj.sender === 'user' ? {
                                backgroundColor: '#c2fac1',
                                marginLeft: '50px',
                                marginRight: '5px'
                            } : {}}
                            className={classes.message}>
                            {obj.message}
                        </div>
                    })
                }
                {isFetching && <div className={classes.chatLoading}><CircularProgress /></div>}
            </div>
            <div className={classes.chatBottom}>
                <input autoFocus placeholder={"Digite sua mensagem"} className={classes.chatInput} disabled={isFetching}
                     ref={inputRef}
                     style={{
                         cursor: isFetching ? 'not-allowed' : 'auto'
                     }}
                     value={inputMessage}
                     onChange={onInputChange}
                     onKeyDown={handleKeyDown}
                />
                <div className={classes.chatSendButton} style={{
                    cursor: isFetching ? 'not-allowed' : 'pointer'
                }}
                    onClick={sendMessage}
                >
                    <SendIcon />
                </div>
            </div>
        </div>
        <div className={classes.icon}>
            <Fab color="primary" aria-label="add" onClick={() => {
                setOpen(!open);
            }}>
                <AssistantIcon />
            </Fab>
        </div>
    </div>

};

export default ChatBot;