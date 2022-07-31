import Utils from "../utilityLibrary/dev/utils";
import Config from "../configs/index";

const getAnalytics = (start_date, end_date) => {
  const requestOptions = {
    method: "GET",
  };

  const query =
    start_date || end_date
      ? `?${Utils.buildQuery({
          start_date,
          end_date,
        })}`
      : "";

  let url = `${Config.TRADE_URL}/users/analytics${query}`;

  return fetchFrom(url, requestOptions).then((counts) => {
    return counts;
  });
};
const getNotifications = (params) => {
  const requestOptions = {
    method: "GET",
  };
  let data = Utils.buildQuery(params);
  console.log(data);
  let url = `${Config.TRANSIT_URL}/users/notifications?${data}`;

  return fetchFrom(url, requestOptions).then((shipments) => {
    return shipments;
  });
};
const updateNotification = ({markSingle, markAll, archive, id}) => {
  let data = {
    activityId: id,
  };
  let apiUrl = "";
  if (markSingle||!markSingle) {
    data = {
      ...data,
      read: true,
    };
    apiUrl = "mark";
  }
  if (markAll) {
    apiUrl = "mark/all";
  }
  if (archive) {
    data = {
      ...data,
      archive: true,
    };
    apiUrl = "archive";
  }
  const requestOptions = {
    method: "POST",
    body: JSON.stringify(data)
  };
 // console.log(data, requestOptions);
  let url = `${Config.TRANSIT_URL}/users/notification/${apiUrl}`;

  return fetchFrom(url, requestOptions).then((shipments) => {
    return shipments;
  });
};
function fetchFrom(url, options, auth, token) {
  // performs api calls sending the required authentication headers
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Device-Id": window.localStorage.getItem("device_id"),
  };

  // Setting Authorization header
  // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
  if (auth) {
    headers.Authorization = "Bearer " + Config.ACCESS_TOKEN;
  } else {
    headers["x-access-key"] = `Bearer ${Config.API_KEY}`;

    if (token) {
      headers.Authorization = "Bearer " + token;
    } else if (Utils.loggedIn()) {
      headers.Authorization = "Bearer " + Utils.getToken();
    } else {
      Utils.logout();
    }
  }

  return fetch(url, {
    headers,
    ...options,
  })
    .then((res) => Utils.handleResponse(res))
    .then((response) => {
      return response;
    });
}
export const userService = {
  getAnalytics,
  getNotifications,
  updateNotification,
  fetchFrom
};
