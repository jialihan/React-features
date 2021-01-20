export default function InlineCSSComponent() {
    const h1Style = {
        color: 'blue',
        border: '1px solid blue'
    }
    return (
        <h1 style={h1Style}>
            I am inline-CSS style.
        </h1>
    );
}
