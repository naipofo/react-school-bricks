export default function Header() {
    return (
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <span className="fs-4"> RS_Bricks</span>
            </a>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a href="#" className="nav-link active" aria-current="page">Sets</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link" aria-current="page">Parts</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link" aria-current="page">Help</a>
                </li>
            </ul>
        </header>
    );
}