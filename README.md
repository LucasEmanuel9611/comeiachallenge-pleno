  if (
    (moment(new Date(item.dt * 1000)).format("LT") ===
      "3:00 AM") |
    (moment(new Date(item.dt * 1000)).format("LT") ===
      "9:00 AM") |
    (moment(new Date(item.dt * 1000)).format("LT") ===
      "3:00 PM") |
    (moment(new Date(item.dt * 1000)).format("LT") ===
      "9:00 PM")
  ) {
    return <span>{item?.weather[0]?.main}</span>
  }