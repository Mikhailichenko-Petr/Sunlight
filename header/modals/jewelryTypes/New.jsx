import style from "./New.module.css"

export const New=({State,PageSize,TotalImagesCount,CurrentPage})=>{
    const pageCount= Math.ceil(TotalImagesCount/PageSize)
    const pages = []
    for(let i=1;i<pageCount;i++){
        pages.push(i)
    }
    return(
        <div>
           <div>
                {pages.map(p=>{
                        return <span className={CurrentPage==p&&style.number}>{p}</span>
                })}
           </div>
           <img src="https://g6.sunlight.net/media/catbans/b7d927a561ef4382cb6db85d5d948dc537d97e41.jpg" alt="" />
           <div className={style.product}>
           {
                State.map(res=>{
                    return(
                        <div className={style.icon}><img src={res} alt="" /></div>
                    )
                })
           }
           </div>
        </div>
    )
}