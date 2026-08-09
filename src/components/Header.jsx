export default function Header(props) {
    const title = props.title;

    return (
        <header className="header text-white text-center mb-5 py-5">
            <span className="fw-bold m-0">{title}</span>
        </header>
    );
}