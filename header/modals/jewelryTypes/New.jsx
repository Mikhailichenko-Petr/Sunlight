import style from "./New.module.css"

export const New=({State,PageSize,totalUsersCount,CurrentPage,Page})=>{
    const pageCount= Math.ceil(totalUsersCount/PageSize)
    const pages = []
    for(let i=1;i<=pageCount;i++){
        pages.push(i)
    }
    return(
        <div>
           <div className={style.page}>
                {pages.map(p=>(
                        <span key={p} className={CurrentPage===p&&style.number} onClick={()=>{Page(p)}}>{p}</span>
                ))}
           </div>
           <img src="https://g6.sunlight.net/media/catbans/b7d927a561ef4382cb6db85d5d948dc537d97e41.jpg" alt="" />
           <div className={style.product}>
           {
                State.map(res=>{
                    return(
                        <div className={style.icon}>{res.name}</div>
                    )
                })
           }
           </div>
        </div>
    )
}