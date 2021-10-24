export const title = "TODO";
export const text = "Welcome to website";
export const layout = "layouts/main.tsx";

export default (data) => {
    return (
        <section id="index">
            <h1>{data.text}</h1>
            <h3>Coming soon.....</h3>
        </section>
    );
};