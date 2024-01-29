import React, { useState } from "react";
import {
  MDBAccordion,
  MDBAccordionItem,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardImage,
  MDBCardOverlay,
  MDBCardText,
  MDBCardTitle,
  MDBIcon,
} from "mdb-react-ui-kit";

const ResidenceCardsAll = ({
  residence,
}) => {
  const { _id, name, category, description, image, price } = residence;
  // handle the confirmation delete modal
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  //handle edit residence
  // const [editMode, setEditMode] = useState(false);
  // const finishEdit = () => setEditMode(false);

  return (
    <>
      <MDBCard className="mb-4" style={{height:"540px"}}>
        
        <MDBCardImage
          overlay
          src={image}
          alt={name}
          position="top"
          style={{ height: "300px" }}
        />
        <MDBCardOverlay
          style={{
            textAlign: "right",
            color: "black",
            fontSize: "1.3rem",
            fontWeight: "900",
            textAlign: "right",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              textAlign: "center",
              display: "inline",
              padding: "8px",
            }}
          >
            {price} €
          </div>
        </MDBCardOverlay>
        <MDBCardBody style={{ height: "auto" }}>
          <MDBCardTitle style={{ fontSize: "1.3rem", fontWeight: "900" }}>
            {name}
          </MDBCardTitle>
          <MDBCardText>
            <MDBAccordion flush>
              <MDBAccordionItem collapseId={1} headerTitle="Description">
                {description}
              </MDBAccordionItem>
            </MDBAccordion>
          </MDBCardText>
        </MDBCardBody>
        <MDBCardFooter style={{display:"flex", justifyContent:"space-between"}}>
          <small className="text-muted">{category}</small>
          <div className="exercise-actions">
      </div>
        </MDBCardFooter>
      </MDBCard>



{/* 
      <div className="exercise-card">
      <img src={image} alt={name} className="exercise-image" />
      <div className="exercise-details">
        <h3>{name}</h3>
        <p>{category}</p>
        <p>{price}</p>
        <p>{description}</p>
      </div>
      <div className="exercise-actions">
        <button className="btn-link"
          onClick={() => setEditMode(true)}>
            Edit
        </button>
        <button
          className="btn-link"
          onClick={() => setShow(true)}
        >
          Delete
        </button>
      </div>
    </div> */}
    </>
  );
};

export default ResidenceCardsAll;
