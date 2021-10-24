import React, { useState } from 'react'
import './InformationCard.css'
import { dominantColors } from '../../../Utils/colors';
import { IconButton } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";

import Modal from '../../Sidebar/Modal/Modal';
import ModalContent from './ModalContentTag.js'

function InformationCard({ infoText, tags, sheetName }) {

  const [modal, setModal] = useState(false)

  return (
    <div className="information_card">
      <div className="header_wrapper">
        <h1>Information</h1>
        {tags.map((tag) => (
          <div>
            <a
              href={`/tag/${encodeURIComponent(tag)}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <span
                className="dot"
                style={{
                  backgroundColor:
                    dominantColors[
                      Math.floor(Math.random() * dominantColors.length)
                    ],
                }}
              />

              <span>{tag}</span>
            </a>
          </div>
        ))}
        <span>&nbsp;&nbsp;</span>
        <div className="add" onClick={() => setModal(true)}>
          <IconButton>
            <AddIcon />
          </IconButton>
        </div>
        <Modal title="Add Tag" onClose={() => setModal(false)} show={modal}>
          <ModalContent onClose={() => setModal(false)} sheetName={sheetName} />
        </Modal>
      </div>
      <div className="info_text">
        <span>{infoText}</span>
        <br />
        <div className="tag_tooltip">
          <span>test</span>

          <span className="tag_tooltiptext">test</span>
        </div>
      </div>
    </div>
  );
}

export default InformationCard
