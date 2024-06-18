import { FontColorsOutlined, SyncOutlined } from '@ant-design/icons';

const AuthForm = ({
    handleSubmit,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    secret,
    setSecret,
    loading,
    page,
    register,
    profileUpdate,
}) => {

    return (
        <form onSubmit={handleSubmit}>


            {page !== "login" && <div className="form-group p-2">
                <div className="row py-5 bg-secondary text-light bg-default-image register-box-above">
                    <div className="col text-center ">
                        <h1 className='register-box-above-text'>Registerrr</h1>
                    </div>
                </div>
                <small>
                    <label className="text-muted register-text-tiny">Your name</label>
                </small>

                <input
                    type="text"
                    className="form-control" placeholder="Enter name" id="register-text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>}

            <div className="form-group p-2">
                <small>
                    <label className="text-muted register-text-tiny">Your Email</label>
                </small>
                <input
                    type="email"
                    className="form-control" placeholder="Enter E-mail" id="register-text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    disabled={profileUpdate}
                />
            </div>

            <div className="form-group p-2 Nikker">
                <small>
                    <label className="text-muted register-text-tiny">Your Password</label>
                </small>
                <input
                    type="password" className="form-control" placeholder="Enter password" id="register-text"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>

            {page !== "login" && <>
                <div className="form-group p-2">
                    <small>
                        <label className="text-muted register-text-tiny">Pick a question</label>
                    </small>
                    <select className="form-control" id="register-text">
                        <option>What is your favourite color?</option>
                        <option id='register-option'>What is your best friend's name?</option>
                        <option id='register-option'>What city you were born?</option>
                    </select>


                </div>

                <div className="form-group p-2">
                    <small className=" text-muted register-text-tiny" >
                        You can use these to reset your password if forgotten.
                    </small>
                    <input
                        type="text"
                        className="form-control" placeholder="Write your anwser here" id="register-text"
                        value={secret}
                        onChange={e => setSecret(e.target.value)}
                    />
                </div>

            </>}

            <div className="form-group p-2 ">
                <button disabled={
                    profileUpdate ? loading :
                        page === "login"
                            ? !email || !password || loading
                            : !name || !email || !secret || !password || loading

                } className=" col-12 register-button ">
                    {loading ? <SyncOutlined spin /> : profileUpdate ? "Apply Changes" : page == "login" ? "Login" : register == "register" ? "Register" : null} </button>
            </div>
        </form>
    );
}



export default AuthForm;