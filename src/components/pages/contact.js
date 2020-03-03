import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contactPicture from "../../../static/assets/images/bio/tianyi-ma-WiONHd_zYI4-unsplash.jpg";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div className="left-column"
            style={{
                background: `url(${contactPicture}) no-repeat`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
                Photo by Tianyi Ma on Unsplash
            </div>
                
            <div className="right-column">
                <div className="contact-bullet-points">
                    <div className="bullet-point">
                        <div className="icon">
                            <FontAwesomeIcon icon="phone-volume" />
                        </div>
                        <div className="text">
                            (714) 605-4717
                        </div>
                    </div>
                    <div className="bullet-point">
                        <div className="icon">
                        <FontAwesomeIcon icon="envelope" />
                        </div>
                        <div className="text">
                            Luey714@gmail.com
                        </div>
                    </div>
                    <div className="bullet-point">
                        <div className="icon">
                        <FontAwesomeIcon icon="map-marked-alt" />
                        </div>
                        <div className="text">
                            Santa Barbara, CA
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}