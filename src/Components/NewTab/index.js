/* global chrome */
import React, { useState, useEffect } from "react";
import FormObligatorio from "../FormObligatorio";
import { DataAfiliadoMock } from "../../utilities";

const NewTab = () => {
  const [afiliado, setAfiliado] = useState(DataAfiliadoMock);

  useEffect(() => {
    chrome.storage.sync.get(["afiliado"], result => {
      setAfiliado(result.afiliado);
      console.log("Value currently is " + result.afiliado.nombre);
    });
  }, []);

  return (
    <div>
      <FormObligatorio afiliado={afiliado} />
    </div>
  );
};

export default NewTab;
