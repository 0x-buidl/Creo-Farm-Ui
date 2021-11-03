import { Component } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Link, withRouter } from "react-router-dom";

class Navig extends Component {
  render() {
    return (
      <div className="justify-content-center">
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="toggleNav">
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body justify-content-center">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link className="nav-link links" to="/farms">
                  Farms
                </Link>
              </li>
              <li className="nav-item " data-bs-dismiss="offcanvas">
                <Link className="nav-link links" to="/farm-stats">
                  Farm Stats
                </Link>
              </li>

              <li className="nav-item small-social">
                <a
                  className="social-icon"
                  href="#n"
                  style={{ marginRight: "7px" }}
                >
                  <TelegramIcon />
                </a>
                <a className=" social-icon" href="#t">
                  <TwitterIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Navig);
