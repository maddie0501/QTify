import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BasicModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style} style= {{borderRadius:"2%"}}>
        <Typography id="title" variant="h5" style={{ textAlign: "center" }}>
          Feedback
        </Typography>
        <Typography id="formdescp" sx={{ mt: 2 }}>
          <form style={{ paddingBottom: "10px" }}>
            <input
              type="text"
              name="name"
              style={{
                border: "1px solid rgba(52, 201, 75, 1)",
                width: "100%",
                borderRadius: "2px",
                padding: "5px",
              }}
              placeholder="Full name"
            />
          </form>

          <form style={{ paddingBottom: "10px" }}>
            <label>
              <input
                type="text"
                name="name"
                style={{
                  border: "1px solid rgba(52, 201, 75, 1)",
                  width: "100%",
                  borderRadius: "2px",
                  padding: "5px",
                }}
                placeholder="Email ID"
              />
            </label>
          </form>

          <form style={{ paddingBottom: "10px" }}>
            <label>
              <input
                type="text"
                name="name"
                style={{
                  border: "1px solid rgba(52, 201, 75, 1)",
                  width: "100%",
                  borderRadius: "2px",
                  padding: "5px",
                }}
                placeholder="Subject"
              />
            </label>
          </form>

          <form style={{ paddingBottom: "10px" }}>
            <label>
              <input
                type="text"
                name="name"
                style={{
                  border: "1px solid rgba(52, 201, 75, 1)",
                  width: "100%",
                  paddingBottom: "100px",

                  borderRadius: "2px",
                }}
                placeholder="Description"
              />
            </label>
          </form>
        </Typography>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{
              backgroundColor: " rgba(52, 201, 75, 1)",
              color: "white",
              border: "none",
              borderRadius: "12px",
              paddingTop: "10px",
              paddingRight: "16px",
              paddingBottom: "10px",
              paddingLeft: "16px",
            }}
          >
            Submit Feedback
          </button>
        </div>
      </Box>
    </Modal>
  );
};

export default BasicModal;
