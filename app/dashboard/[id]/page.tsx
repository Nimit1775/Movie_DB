export default function Dynamic ({params}: {params : {id: string}}) 
{
    return (
        <h1>
            Hello from Dynamic {params.id}
        </h1>
    )
}