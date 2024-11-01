export default function NewIteam({ title, description, src, url }) {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-5 mx-5 px-2 py-2 shadow-lg" style={{ maxWidth: "345px", border: '3px solid black', borderRadius: '10px' }}>
      <img src={src} style={{ height: "200px", width: "325px", borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text text-light">{description ? description.slice(0, 90) : "The default description given by the coder"}</p>
        <a href={url} className="btn btn-success mt-2">Read More</a>
      </div>
    </div>
  );
}
