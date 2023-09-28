export default function Item({ name, quantity, category }) {
    return (
        <h2 className="text-2xl font-bold m-2 text-gray-400">
            {[name, quantity, category]}
        </h2>
    );
}
