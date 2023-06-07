import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TodoUi.css";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import TodoNavBar from "./TodoNavBar";

const ToDo = () => {
  //===For Modal Opn ===>
  const [Modal, setModal] = useState(true);
  //====pegination=========>
  const [nxt, setnxt] = useState(1);

  //==Update Data ===>

  const [getData, setGetData] = useState([]);

  // == Edit ====>

  const [openInput, setopenInput] = useState(false); //for input opn

  const [openInputIndex, setopenInputIndex] = useState(false); //for index

  const [editTask, seteditTask] = useState(""); //its edit todo

  //==Search bar =====>

  const [search, setSearch] = useState("");

  // ============ Pandding / Completed =================>

  const all = getData?.filter((item) => {
    if (item.status === "Completed" || item.status === "Pending") {
      return item;
    }
  }).length;

  const completed = getData?.filter((item) => {
    if (item.status === "Completed") {
      return item;
    }
  }).length;

  const pending = getData?.filter((item) => {
    if (item.status === "Pending") {
      return item;
    }
  }).length;

  // Initial Data===========>

  const [initialData, setinitialData] = useState({
    todo: null,
    status: "Pending",
    assignedTym:new Date().toLocaleTimeString(),
    assignedDate:new Date().toLocaleDateString(),
    finalizeTym: "=",
    finalizeDate: "=",
  });

  const submitData = (v) => {
    const { value } = v.target;
    setinitialData({
      ...initialData,
      todo: value,
    });
  };

  // =======Post Api(snd data to data base)===============================>
  const postData = () => {
    if (initialData.todo === null) {
      toast.error("plz enter input", {
        position: "bottom-right",
        theme: "colored",
      });
    } else {
      axios
        .post("http://localhost:4400/user_todo", initialData)
        .then(() => {
          getNewData();
          document.getElementById("todoId").value = " ";
          setinitialData({
            todo: null,
            status: "Pending",
            assignedTym:new Date().toLocaleTimeString(),
            assignedDate:new Date().toLocaleDateString(),
            finalizeTym: "=",
            finalizeDate: "=",
          });
          toast.success("ToDo Added", {
            position: "bottom-right",
            theme: "colored",
          });
        })
        .catch(() => {
          console.log("Data notpost");
        });
    }
  };
  // =======Get Api(retriving data from data base)=================>

  const getNewData = () => {
    axios
      .get("http://localhost:4400/user_todo")
      .then((res) => {
        setGetData(res.data);
      })
      .catch(() => {
        console.log("Data notget");
      });
  };

  //==use Effect=====>

  useEffect(() => {
    getNewData();
  }, []);

  // ============Search bar =========================>

  const searchItem = getData?.filter((item) => {
    if (search === "") {
      return item;
    } else if (item.todo.toLowerCase().includes(search.toLowerCase())) {
      return item;
    }
  });

  // ======= Delete Api  =============================>

  const deleteData = (data) => {
    const { id } = data;
    axios
      .delete(`http://localhost:4400/user_todo/${id}`)
      .then((res) => {
        getNewData();
        toast.warning("Data Deleted", {
          position: "bottom-right",
          theme: "colored",
        });
      })
      .catch(() => {
        toast.warning("Delete api don't work", {
          position: "bottom-right",
          theme: "colored",
        });
      });
  };
  // ======= Put/Patch Api(update data in data base) ======================>

  const patchData = (data) => {
    const { id } = data;
    axios
      .patch("http://localhost:4400/user_todo/" + id, {
        status: "Completed",
        finalizeTym:new Date().toLocaleTimeString(),
        finalizeDate:new Date().toLocaleDateString(),
      })
      .then((res) => {
        getNewData();
      })
      .catch((err) => {
        console.log(err.data);
      });
  };
  // =======Edit Api ========================>

  const inputUpdate = (item) => {
    const { id } = item;
    axios
      .patch("http://localhost:4400/user_todo/" + id, {
        todo: editTask ? editTask : item.todo,
        assignedTym:new Date().toLocaleTimeString(),
        assignedDate:new Date().toLocaleDateString(),
      })
      .then((res) => {
        getNewData();
        setopenInput(false);
        toast.success("Data Edit", {
          position: "bottom-right",
          theme: "colored",
        });
      })
      .catch((err) => toast.error("Connection Error!"));
  };

  return (
    <>
      <div className="h-full w-full">
        {/*=============================== table nave bar======================== */}
        <TodoNavBar
          btn={setModal}
          fxn={Modal}
          search={(e) => setSearch(e.target.value)}
          allCount={all}
          complt={completed}
          pending={pending}
        />

        {/*============================== table modal area==================== */}
        <div className={Modal ? "hidden" : "show"}>
          <div className="absolute h-[165px] w-[310px] top-[122px] mt-1 right-[360px] bg-purple-400 text-white rounded px-2 py-1 z-50">
            <div className="flex justify-between">
              <h4>Add Todo</h4>
              <button onClick={() => setModal(!Modal)}>
                <FontAwesomeIcon icon="fa-regular fa-circle-xmark" />
              </button>
            </div>

            <input
              id="todoId"
              type="text"
              className="block w-full p-2 text-sm mt-3 t text-black border border-purple-800 rounded-lg "
              placeholder="Input here..."
              autoFocus
              onInput={(v) => submitData(v)}
            />
            <div className="flex justify-end gap-2 mt-2 mr-1">
              <button
                className="border-2 border-white hover:border-purple-300 rounded-lg hover:bg-purple-800 hover:text-white px-2 py-1"
                onClick={() => setModal(!Modal)}
              >
                Close{" "}
              </button>
              <button
                className="border-2 border-white hover:border-purple-300 rounded-lg hover:bg-purple-800 hover:text-white px-2 py-1"
                onClick={() => {
                  postData();
                  setModal(!Modal);
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>

        {/*=====================table===================*/}
        <div className="relative overflow-x-auto shadow-md sm:rounded-l">
          <div className=" ml-[45px]  rounded">
            <table className=" text-sm  text-left rounded ">
              {/*================== table head================================= */}
              <thead className="text-sm text-white  rounded bg-slate-700  ">
                <tr>
                  <th scope="col" className="px-3 py-3">
                    #
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Task
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Assigned Tym
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Assigned Date
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Finalize Tym
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Finalize Date
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Mark
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              {/*===========================table body============================== */}
              <tbody className="text-sm text-purple-800 bg-white ">
                {searchItem.length !== 0 ? (
                  searchItem
                    ?.splice(nxt * 6 - 6, nxt * 6)
                    ?.map((item, index) => {
                      return (
                        <tr>
                          <th scope="col" className="px-3 py-3">
                            {item.id}
                          </th>
                          {/* item todo*/}
                          <th
                            scope="col"
                            className={` px-3 ${
                              item.status === "Completed" && "line"
                            }`}
                          >
                            {openInput && openInputIndex === index ? (
                              <input
                                defaultValue={item.todo}
                                onChange={(e) => seteditTask(e.target.value)}
                                className="w-[75px] h-[37px] py-2 text-sm txt-purple-900 border border-purple-800 rounded-lg "
                              />
                            ) : (
                              item.todo
                            )}
                          </th>
                          {/* item status*/}

                          <th
                            scope="col"
                            //  className="py-3"
                            className={
                              item.status === "Pending"
                                ? "red"
                                : item.status === "Completed" && "green"
                            }
                          >
                            {item.status}
                          </th>
                          {/* item tym*/}

                          <th scope="col" className="py-3 px-3">
                            {item.assignedTym}
                          </th>
                          <th scope="col" className="py-3 px-3">
                            {item.assignedDate}
                          </th>
                          <th scope="col" className="py-3 px-3">
                            {item.finalizeTym}
                          </th>
                          <th scope="col" className="py-3 px-3">
                            {item.finalizeDate}
                          </th>

                          {/* item chackboks*/}

                          <th scope="col" className="py-3 px-4">
                            <input
                              defaultChecked={item.status === "Completed"}
                              disabled={item.status === "Completed"}
                              type="checkbox"
                              onClick={() => patchData(item)}
                            />
                          </th>
                          {/* item btn*/}

                          <th scope="col" className="py-3 px-3">
                            {openInput && openInputIndex === index ? (
                              <>
                                {/* save--cancle btn */}
                                <button
                                  disabled={item.status === "Completed"}
                                  onClick={() => inputUpdate(item)}
                                  className="text-green-800 mr-2"
                                >
                                  <FontAwesomeIcon icon="fa-regular fa-floppy-disk" />{" "}
                                </button>
                                <button
                                  disabled={item.status === "Completed"}
                                  className="text-red-800 mr-2"
                                  onClick={() => setopenInput(false)}
                                >
                                  <FontAwesomeIcon icon="fa-regular fa-rectangle-xmark" />{" "}
                                </button>
                              </>
                            ) : (
                              <>
                                {/* edit--delete btn */}
                                <button
                                  disabled={item.status === "Completed"}
                                  className="text-green-800 mr-2"
                                  onClick={() => {
                                    setopenInput(true);
                                    setopenInputIndex(index);
                                  }}
                                >
                                  <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                                </button>
                                <button
                                  className="text-red-800 mr-2"
                                  onClick={() => deleteData(item)}
                                >
                                  <FontAwesomeIcon icon="fa-solid fa-trash-can" />
                                </button>
                              </>
                            )}
                          </th>
                        </tr>
                      );
                    })
                ) : (
                  <tr>
                    <th scope="col" className="px-2 py-3"></th>
                    <th scope="col" className="px-2 py-3"></th>
                    <th scope="col" className="px-1 py-3"></th>

                    <th scope="col" className="px-2 py-3"></th>
                    <th scope="col" className="px-2 py-3">
                      No Data Found...
                    </th>
                    <th scope="col" className="px-2 py-3"></th>
                    <th scope="col" className="px-2 py-3"></th>
                    <th scope="col" className="px-2 py-3"></th>
                    <th scope="col" className="px-2 py-3"></th>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="flex ">
            <button
              onClick={() => {
                setnxt(nxt - 1);
              }}
              disabled={nxt===1 && true}
              className="ml-[848px] mr-2 mt-2"
            >
              <FontAwesomeIcon icon="fa-solid fa-backward" />
            </button>

            <h6 className="text-muted mt-2">page</h6>

            <button
              onClick={() => {
                setnxt(nxt + 1);
              }}
              disabled={nxt*6 < getData?.length?false:true}
              className="ml-2 mt-2"
            >
              <FontAwesomeIcon icon="fa-solid fa-forward " />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDo;
library.add(fab, fas, far);
