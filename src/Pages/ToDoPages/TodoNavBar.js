import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

const TodoNavBar = (props) => {
  return (
    <>
     <nav className=" text-lg text-purple-800 ">
              <div className="max-w-screen-xl  px-3 py-3 mx-auto ">
            <div className="flex items-center bg-white py-[7px] px-[20px] rounded justify-between text-lg font-bold">
              <div>Todo</div>
              <div className='hidden sm:block'>
              <div className="flex items-center gap-3  ml-[160px] justify-around">
                <div>All-{props.allCount}</div>
                <div>Pending-{props.pending}</div>
                <div>Completed-{props.complt}</div>
              </div>
              </div>
              <div className="flex items-center  gap-3">
                <form action="">
                  <div className="relative w-[180px]  flex items-center">
                      <input
                      type="search"
                      id="default-search"
                      className="block w-full p-2 text-sm txt-purple-900 border border-purple-800 rounded-lg "
                      placeholder="Search..."
                      autoFocus
                        onChange={props.search}
                    />
                      <div className="absolute right-0 mr-1 flex items-center  pointer-events-none">
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                    </div>
                  </div>
                </form>
                
                <button className="border-2 border-purple-800 hover:border-white rounded-lg hover:bg-purple-800 hover:text-white px-2 py-1" onClick={()=>(props.btn(!props.fxn))} >
                  Add Todo
                </button>
              </div>
            </div>
          </div>
          
        </nav>
    
    </>
  )
}

export default TodoNavBar
library.add(fab, fas, far);