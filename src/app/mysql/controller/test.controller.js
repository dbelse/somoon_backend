  exports.address = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null; 
    res
    .send("https://somoonhouse.com/img/55디자인컴퍼니/달서구 용산동 용산동서우방타운아파트 23평/거실1.jpg ")
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving recommends."
        });
      });
  };