import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import API from "../../Api";
import DeleteRestaurant from "./DeleteRestaurant";
import {
  BsFillTrashFill,
  BsArrowRepeat,
  BsPlusSquareFill,
} from "react-icons/bs";
import UpdateRestaurant from "./UpdateRestaurant";
import AddRestaurant from "./AddRestaurant";

function Restaurant({ role, userId }) {
  const [DeleteId, setDeleteId] = useState("");
  const [updatedRestaurant, setupdatedRestaurant] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const ShowAddPopup = () => setShowAdd(true);
  const CloseAddPopup = () => setShowAdd(false);
  const [showDelete, setShowDelete] = useState(false);
  const ShowDeletePopup = (id) => {
    setDeleteId(id);
    setShowDelete(true);
  };
  const CloseDeletePopup = () => {
    setDeleteId("");
    setShowDelete(false);
  };
  const [showUpdate, setShowUpdate] = useState(false);
  const ShowUpdatePopup = (Restaurant) => {
    setupdatedRestaurant(Restaurant);
    setShowUpdate(true);
  };
  const CloseUpdatePopup = () => {
    setupdatedRestaurant("");
    setShowUpdate(false);
  };
  const [Restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    API.get(`restaurants`).then((res) => {
        setRestaurants(res.data);

    });
  }, [showAdd, showDelete, showUpdate, role, userId]);
  return (
    <div className="w-100">
      <h3 className="m-3">
      Restaurants
        <Button className="float-end" onClick={ShowAddPopup}>
          Add <BsPlusSquareFill className="m-1" />
        </Button>
      </h3>
      <Table striped bRestauranted hover size="sm" className="m-auto text-center">
        <thead>
          <tr>
            {role !== "client" && <th>Client</th>}
            <th>Payment </th>
            <th>Price</th>
            <th>Date From</th>
            <th>Date To</th>
            <th>Room N°</th>
            <th>Hotel</th>
            {role !== "client" && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {Restaurants.map((Restaurant, key) => {
            return (
              <tr key={key}>
                {role !== "client" && <td>{Restaurant.client?.name}</td>}
                <td>{Restaurant.payment}</td>
                <td>{Restaurant.room?.price} Dh</td>
                <td>{new Date(Restaurant.date_from).toLocaleDateString()}</td>
                <td>{new Date(Restaurant.date_to).toLocaleDateString()}</td>
                <td>{Restaurant.room?.number}</td>
                <td>{Restaurant.room?.hotel?.name}</td>
                {role !== "client" && (
                  <td>
                    <BsFillTrashFill
                      className="m-2"
                      onClick={() => ShowDeletePopup(Restaurant._id)}
                    />
                    <BsArrowRepeat
                      className="m-2"
                      onClick={() => ShowUpdatePopup(Restaurant)}
                    />
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </Table>
          <UpdateRestaurant
            showUpdate={showUpdate}
            CloseUpdatePopup={CloseUpdatePopup}
            updatedRestaurant={updatedRestaurant}
          />
          <DeleteRestaurant
            showDelete={showDelete}
            CloseDeletePopup={CloseDeletePopup}
            id={DeleteId}
          />{" "}
      <AddRestaurant
        showAdd={showAdd}
        CloseAddPopup={CloseAddPopup}
        Client={userId}
        role={role}
      />
    </div>
  );
}

export default Restaurant;
