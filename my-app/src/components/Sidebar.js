import css from "./css/Sidebar.module.css";

function SideBarLinks(){
    return  <div className={css.sidebar}>
                <a>MyPhotos</a>
                <a>MyIllustrations</a>
                <a>MyPaintings</a>
            </div>
}
export {SideBarLinks}