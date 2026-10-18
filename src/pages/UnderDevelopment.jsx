import Robot from '../components/Robot.jsx'

export default function UnderDevelopment() {
  return (
    <main className="page">
      <div className="content">
        <Robot />

        <h1 className="title">
          Sedang dibangun<span className="cursor">_</span>
        </h1>

        <p className="subtitle">
          Website Pemira STIAMI belum selesai.
          <br />
          Tunggu ya!
        </p>

        <div className="help">
          <p className="help-label">Butuh bantuan?</p>
          <a className="help-email" href="mailto:support@pemirastiami.com">
            support@pemirastiami.com
          </a>
        </div>
      </div>
    </main>
  )
}
