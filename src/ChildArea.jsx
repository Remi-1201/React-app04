const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "#dbe7e4"
};

// 1- props = AppのDOMで定義されたChildAreaのprops
export const ChildArea = (props) => {
  const { open } = props;
  return (
    <>
      {/* 1- {open? (true) : (false)}
       * the default is false */}
      {open ? (
        <div style={style}>
          <p>Child Component</p>
        </div>
      ) : null}
    </>
  );
};
