import { FontColorsOutlined, SyncOutlined } from '@ant-design/icons'; 

const ForgotPasswordForm = ({
    handleSubmit,
    email,
    setEmail,
    newPassword,
    setNewPassword,
    secret,
    setSecret,
    loading,
    page,
}) => {

    return (
                    <form onSubmit={handleSubmit}>

                        <div className="form-group p-2" >
                            <small>
                            <label className="text-muted register-text-tiny">Your Email</label>
                            </small>
                            <input
                            id='register-text'
                            type="email"
                            className="form-control" placeholder="Enter E-mail"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form-group p-2">
                            <small>
                            <label className="text-muted register-text-tiny">Your New Password</label>
                            </small>
                            <input
                            type="password"
                            id='register-text' 
                            className="form-control" placeholder="Enter New password"
                            value={newPassword}
                            onChange={e => setNewPassword(e.target.value)}
                            />
                        </div>
                        
                        <>
                        <div className="form-group p-2">
                            <small>
                            <label className="text-muted register-text-tiny">Pick a question</label>
                            </small>
                            <select className="form-control" id='register-text'>
                                <option>What is your favourite color?</option>
                                <option>What is your best friend's name?</option>
                                <option>What city you were born?</option>
                            </select>

                            <small className="form-text forgot-pass-tiny-text">
                                You can use these to reset your password if forgotten.
                            </small>
                        </div>

                        <div className="form-group p-2">
                            <input
                            id='register-text'
                            type="text"
                            className="form-control" placeholder="Write your anwser here"
                            value={secret}
                            onChange={e => setSecret(e.target.value)}
                            />
                        </div>
                        </>

                        <div className=" submit-button">
                        <button disabled={ !email || !newPassword || !secret || loading} className=" forgot-pass-submit-button ">
                            {loading ? <SyncOutlined spin /> :  "Submit"} </button>
                        </div>
                    </form>
    );
}



export default ForgotPasswordForm;