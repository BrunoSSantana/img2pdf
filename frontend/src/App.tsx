import { useRef } from "react";

type fileType = {
  files: any | null
}

export function App() {
  const filesElement = useRef(null);

  const sendFile = async () => {
    const dataForm = new FormData();
    const arquivo: fileType | null= filesElement.current
    console.log(arquivo!.files);
    for (const file of arquivo!.files) {
      dataForm.append('file', file);
    }
    const res = await fetch(`http://localhost:3003/upload`, {
      method: 'POST',
      body: dataForm,
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <div className="row">
      <div className="col-md-4">
        <h3>Uploading Files using Busboy</h3>
        <form id="form" encType="multpart/form-data" method="post" className="">
          <div className="input-group mb-3">
            <input placeholder="Find" type="file" className="form-control" id="inputGroupFile02" multiple ref={filesElement} />
          </div>
          <div className="form-group">
          <button type="button" className="btn btn-success mt-0 me-2" onClick={sendFile}>Success</button>
          <button type="button" className="btn btn-danger">Danger</button>
          </div>
        </form>
      </div>
    </div>
  )
}
