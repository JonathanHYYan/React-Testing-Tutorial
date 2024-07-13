import { GreetProps } from "./greet.types"
// export const Greet = () => {
//     return(
//         <div>Hello</div>
//     )
// }

export const Greet = (props: GreetProps) => {
    return(
        <div>Hello {props.name ? props.name : "Guest"}</div>
    )
}