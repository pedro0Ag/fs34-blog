export default function PostHeader (){
    return (
        <div className=" flex  items-center gap-2">
            <img  src="../public/profile.avif" alt=""
            className=" h-12 w-12  rounded-full flex object-cover ml-3" />
            <a className="underline ml-3" href="#">Alguem</a>
            <span>-</span>
            <span>20/10/2024</span>
        </div>
    )
}