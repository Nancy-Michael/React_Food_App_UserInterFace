

function NewsLetter() {
    return (
        <div className="news-letter">
            <div className="news-lettet-content">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h1
                        style={{ marginBottom: '0' }}
                    >Need advice to improve your flow?</h1>

                    <p
                        style={{ marginTop: '0' }}
                    >Sign Up to join our newsletter and stay up to date.</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ marginRight: '2rem', marginTop: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <input type="email" placeholder="Email" />
                        <button>Sign Up</button>
                    </div>
                    <p>We are concerned about the security of your data, Read {""}
                        <span style={{ color: '#00df9a', cursor: 'pointer' }}>Privacy Policy</span></p>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter
