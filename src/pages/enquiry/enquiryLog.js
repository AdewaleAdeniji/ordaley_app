import React, { useState } from "react";
import {
  AccessTimeFilled,
  Add,
  CalendarMonthOutlined,
} from "@mui/icons-material";
import AppContainer from "../../containers/AppContainer";
import PageHead from "../../components/common/PageHead";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import SidePopup from "../../components/common/SidePopup";

const EnquiryLog = () => {
  const [viewLog, setViewLog] = useState(false);
  const [addLog, setAddLog] = useState(false);
  const openInfo = (e) => {
      if(e.currentTarget ===  e.target) {
          setViewLog(true);
      }
  }
  return (
    <AppContainer activePath={"enquiry"}>
      <PageHead title={"Enquiry Log"}>
        <button className="btn tos-btn">
          <Add /> Add New{" "}
        </button>
      </PageHead>
      <div className="tos-table-container mt-8">
        <div className="enquiry tos-column-heads">
          <div>Date </div>
          <div>Time</div>
          <div>Family Name</div>
          <div>Location</div>
          <div></div>
        </div>
        <div className="enquiry tos-column" onClick={openInfo}>
          <div className="">
            <CalendarMonthOutlined className="date-icon" /> 21st December 2021{" "}
          </div>
          <div>
            <AccessTimeFilled /> 11:05 AM
          </div>
          <div>Family Name</div>
          <div>
            <div className="location-tag">
              <LocationOnRoundedIcon /> Surulere, Lagos
            </div>
          </div>
          <div>
            <button className="btn tos-btn tos-edit" onClick={()=>setAddLog(true)}>
              <DriveFileRenameOutlineOutlinedIcon />
            </button>
            <button className="btn tos-btn tos-delete">
              <DeleteIcon />
            </button>
          </div>
        </div>
        <div className="enquiry tos-column">
          <div className="">
            <CalendarMonthOutlined className="date-icon" /> 21st December 2021{" "}
          </div>
          <div>
            <AccessTimeFilled /> 11:05 AM
          </div>
          <div>Family Name</div>
          <div>
            <div className="location-tag">
              <LocationOnRoundedIcon /> Surulere, Lagos
            </div>
          </div>
          <div>
            <button className="btn tos-btn tos-edit">
              <DriveFileRenameOutlineOutlinedIcon />
            </button>
            <button className="btn tos-btn tos-delete">
              <DeleteIcon />
            </button>
          </div>
        </div>
        <div className="enquiry tos-column">
          <div className="">
            <CalendarMonthOutlined className="date-icon" /> 21st December 2021{" "}
          </div>
          <div>
            <AccessTimeFilled /> 11:05 AM
          </div>
          <div>Family Name</div>
          <div>
            <div className="location-tag">
              <LocationOnRoundedIcon /> Surulere, Lagos
            </div>
          </div>
          <div>
            <button className="btn tos-btn tos-edit">
              <DriveFileRenameOutlineOutlinedIcon />
            </button>
            <button className="btn tos-btn tos-delete">
              <DeleteIcon />
            </button>
          </div>
        </div>
        <div className="enquiry tos-column">
          <div className="">
            <CalendarMonthOutlined className="date-icon" /> 21st December 2021{" "}
          </div>
          <div>
            <AccessTimeFilled /> 11:05 AM
          </div>
          <div>Family Name</div>
          <div>
            <div className="location-tag">
              <LocationOnRoundedIcon /> Surulere, Lagos
            </div>
          </div>
          <div>
            <button className="btn tos-btn tos-edit">
              <DriveFileRenameOutlineOutlinedIcon />
            </button>
            <button className="btn tos-btn tos-delete">
              <DeleteIcon />
            </button>
          </div>
        </div>
        <div className="enquiry tos-column">
          <div className="">
            <CalendarMonthOutlined className="date-icon" /> 21st December 2021{" "}
          </div>
          <div>
            <AccessTimeFilled /> 11:05 AM
          </div>
          <div>Family Name</div>
          <div>
            <div className="location-tag">
              <LocationOnRoundedIcon /> Surulere, Lagos
            </div>
          </div>
          <div>
            <button className="btn tos-btn tos-edit">
              <DriveFileRenameOutlineOutlinedIcon />
            </button>
            <button className="btn tos-btn tos-delete">
              <DeleteIcon />
            </button>
          </div>
        </div>
      </div>
      <SidePopup
        show={viewLog}
        closeFunction={() => setViewLog(false)}
        title="Enquiry Log"
      >
        <div className="view-enquiry">
          <div className="enquiry-detail">
            <label>Family Name</label>
            <div className="enquiry-value">Deo</div>
          </div>
          <div className="enquiry-detail">
            <label>Name of Deceased</label>
            <div className="enquiry-value">Johnn</div>
          </div>
          <div className="enquiry-detail">
            <label>Name of Deceased</label>
            <div className="enquiry-value">Johnn</div>
          </div>
          <div className="enquiry-detail">
            <label>Name of Deceased</label>
            <div className="enquiry-value">Johnn</div>
          </div>
          <div className="enquiry-detail">
            <label>Comment</label>
            <div className="enquiry-value">The disease is old well</div>
          </div>
        </div>
      </SidePopup>
      <SidePopup
        show={addLog}
        closeFunction={() => setAddLog(false)}
        title="Add Enquiry"
      >
          <div className="enquiry-form">
              <div className="form-item">
                  <label>Family Name</label>
                  <input type='text' placeholder="Family Name"/>
              </div>
              <div className="form-item">
                  <label>Family Name</label>
                  <input type='text' placeholder="Family Name"/>
              </div>
              <div className="form-item">
                  <label>Family Name</label>
                  <input type='text' placeholder="Family Name"/>
              </div>
              <div className="form-item">
                  <label>Cause of Death</label>
                  <select>
                      <option value="">Accident</option>
                      <option value="">Accident</option>
                  </select>
              </div>
              <button className="tos-btn btn">Add Enquiry</button>
          </div>
      </SidePopup>
    </AppContainer>
  );
};
export default EnquiryLog;
