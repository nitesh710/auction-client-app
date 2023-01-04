function Deal({ deal }){
    return (
        <img
            src={`https://picsum.photos/seed/${deal.id}/200/200`}
            alt="image"
        />
    );
}

export default Deal;