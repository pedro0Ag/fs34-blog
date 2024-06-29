export default function ContentPost (){
    return (
    <div className="flex gap-4 ml-3">
       <div className="w-[400px] text-ellipsis">
       <h3 className="font-bold mb-2 text-2x1">O alguem de fã do Ney #HOJETEMNEYMAR</h3>
         <p className="text-[13px] line-clamp-3" >
            Lorem  ipsum dolor sit amet consectetur, adipisicing elit.
             Aspernatur sint recusandae officia debitis mollitia deserunt eaque illum. 
            Reprehenderit saepe omnis nihil!
             Sapiente rerum at neque aut facilis architecto fugiat quisquam?
         </p>
       </div>
       <div className="w-[170px] h-[100px]">
       <img src="../public/jogo.jpg" alt="" 
         className="rouded w-full object-cover object-center"/>
       </div>
        </div>
    )
}