import { SyncOutlined } from '@ant-design/icons'; 

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
}) => {

    return (
                    <form onSubmit={handleSubmit}>
                        {page !== "login" && <div className="form-group p-2">
                            <small>
                            <label className="text-muted">Your name</label>
                            </small>
                            <input
                            type="text"
                            className="form-control" placeholder="Enter name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            />
                        </div>}

                        <div className="form-group p-2">
                            <small>
                            <label className="text-muted">Your Email</label>
                            </small>
                            <input
                            type="email"
                            className="form-control" placeholder="Enter E-mail"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form-group p-2">
                            <small>
                            <label className="text-muted">Your Password</label>
                            </small>
                            <input
                            type="password" className="form-control" placeholder="Enter password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        
                        {page !== "login" && <>
                        <div className="form-group p-2">
                            <small>
                            <label className="text-muted">Pick a question</label>
                            </small>
                            <select className="form-control">
                                <option>What is your favourite color?</option>
                                <option>What is your best friend's name?</option>
                                <option>What city you were born?</option>
                            </select>

                            <small className="form-text text-muted">
                                You can use these to reset your password if forgotten.
                            </small>
                        </div>

                        <div className="form-group p-2">
                            <input
                            type="text"
                            className="form-control" placeholder="Write your anwser here"
                            value={secret}
                            onChange={e => setSecret(e.target.value)}
                            />
                        </div>
                        </>}

                        <div className="form-group p-2">
                        <button disabled={
                            page === "login"
                            ?  !email || !password
                            : !name || !email || !secret || !password

                        } className="btn btn-primary col-12 ">
                            {loading ? <SyncOutlined spin /> :  "Submit"} </button>
                        </div>
                    </form>
    );
}



export default AuthForm;