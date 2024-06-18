import { FontColorsOutlined, SyncOutlined } from '@ant-design/icons';

const ProfileFormUpdate = ({
    username,
    setUsername,
    about,
    setAbout,
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
    profileUpdate,
    page,
}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div className="profile-user-content">
                {profileUpdate && <div className="form-group p-2">
                    <small>
                        <label className="text-muted profile-user-text">Your Username</label>
                    </small>
                    <input
                        type="text"
                        className="form-control" placeholder="Enter Username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>}
                {profileUpdate && <div className="form-group p-2">
                    <small>
                        <label className="text-muted profile-user-text">About You.</label>
                    </small>
                    <input
                        type="text"
                        className="form-control" placeholder="About You"
                        value={about}
                        onChange={e => setAbout(e.target.value)}
                    />
                </div>}

                <div className="form-group p-2">
                    <small>
                        <label className="text-muted ">Your name</label>
                    </small>

                    <input
                        type="text"
                        className="form-control" placeholder="Enter name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className="form-group p-2">
                    <small>
                        <label className="text-muted">Your Email</label>
                    </small>
                    <input
                        type="email"
                        className="form-control" placeholder="Enter E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        disabled={profileUpdate}
                    />
                </div>

                <div className="form-group p-2 Nikker">
                    <small>
                        <label className="text-muted ">Your Password</label>
                    </small>
                    <input
                        type="password" className="form-control" placeholder="Enter password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <div className="form-group p-2">
                    <small>
                        <label className="text-muted">Pick a question</label>
                    </small>
                    <select className="form-control">
                        <option>What is your favourite color?</option>
                        <option>What is your best friend's name?</option>
                        <option>What city you were born?</option>
                    </select>


                </div>

                <div className="form-group p-2">
                    <small className=" text-muted" >
                        You can use these to reset your password if forgotten.
                    </small>
                    <input
                        type="text"
                        className="form-control" placeholder="Write your anwser here"
                        value={secret}
                        onChange={e => setSecret(e.target.value)}
                    />
                </div>

                <div className="form-group p-2 ">
                    <button disabled={
                        profileUpdate ? loading :
                            page === "login"
                                ? !email || !password || loading
                                : !name || !email || !secret || !password || loading

                    } className=" col-12 register-button ">
                        {loading ? <SyncOutlined spin /> : "Apply Changes"} </button>
                </div>
            </div>
        </form>
    )
}

export default ProfileFormUpdate;