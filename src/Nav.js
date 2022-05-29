import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="logo"
        />
        <img
          className="nav_avatar"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAAZlBMVEUNfoD///8AeXsAcnQAdnjH2drF3NxOlpeNubqRvr/6/f0AcHP2+/vy+PhIkZPb6uvp8vI4jY6myMmFtrcfhIYAa2220tNZn6Cav8B3q6zR4+OdxcZ+sbJko6Suzc1uqqpcmJpwoqQ2++xKAAAEo0lEQVR4nO2bW5ubIBCGAVk1JgoY4gGNSf//nyzuoY0KCipq++S72b0A8gaGGRgmALz11lvL5J278rCiEe61WZmBCdhVXJ0HjXjTbUPYqgxeBgeq+3OB6n6TDK0K8TGEgKz3ETjst/DdQ1De/YxdIKA4AgRMO/a/EwS8vxrnXhCX4OVj9oKAhB8AAorbASBg9ccsdoSA5Q/FnhDxj3HuCQEpOAAEFPgAEDBFB4CAV3wAiKj133tDwFiG9d0hoDjATEDY4ANAwPB2AIgoue4PAelpawgRDSkuW0OcKoO5cQ5xJgeAwIAeAALl8f4QAJcHgAA4PQAE8PoJgz0gEBs3zk0gAAoUPmtrCIBGjXMjiHHj3AoC4BHj3AwCcL3/3g4CJYPouT0EQI8DQICzzji3hADIPwKExjg3hZD++wAQACuNc2MIgFVnTtcQ10F6XWGc60KgoBezBR828vsRNc5XhZD2H3SkbBT01H8GWAGjI4MmmkZvvfXWW/+VXDg7Wz/Ky5xxhG+3W/suLzXDBbdd2q6ed5bjYMCDvA5PVZX5IlM99Q/0c4SPqfCzJi2u5T1/BozLkc+e98Wkg5LUCHD2fOaPOizSJhOC9oKrMComSAYZmCiKLjGlhBA/q07l456rwygAsgmhNJYdFGecZRBDEU3f6Z7QN1oOPp0Ra/PpKmEDiJOZfeWqTGlHkWYkNNWVNqaFHQjlzdhYlzTQfRvZNdN3JVdmtBbfY3mg1tyqoAjBmGkhj6u7iiI5W+90DOqsv72oH3I8OZLcwI+GvJg3JVnNZ3pAJI+3dUNo3IoSP7wzYDid8iuwvAxPmdzSjyebS/AzmudJ5yMFsDc9B92u0md6nw53CcC/I7z72R5hXvpZgCwXakVhzMMv30SzGng7cGDMrq+Xz9iXjsjCEy0XQqz+GIS5+OPKtrKPv6swVCQKOR+uQTBOwon3BVLlLg0Vg+QqDA4bEU1zA+8+hwDzk9DmbgeiTbD2hsEoKQyeILu6ZOVq8yFjUVAQ8zl4VezXDC3euNIns8JiFRQcQm7cBRMi+yap9SooRIqZHHIWn9UaBN8caQ5sjwLSDioyddy1U0TSpyLxqGcIVlmFocyugF8MJmUJriGUeepVVFnMxKBCR6uRO6dKg4z4CMSgFL37wfJafKofeZIkjHMm/+T5oyzSLBMkHocqzfcHuuuHicOAI+989trAwD/VLmCbiGjTApwFj5Gr7N0CYuQFnOD2PtEmOz6TAK3kP0L4WRVeH0GbXBnZWNrro0JMDxGNh/LLhTT6FhervP+SYDGi2MpZGZxcZkFYMADkxl9q8ztKYV1aYKGEjUm4grB6mMOKX9esIYvQYVC7NFONFcSgqHEdFTYQE8FjtmobmxgLHktkETokxNMNRGJ1yNSXySyS3S/kJsrZ5somdIyWLS2QVehwFTyo3b1jrIxsvojdrRSb1Glby+y55S9EMz2kvT4sIZz47cYOwo3f7hcDTUFMFiLPkVXocOW3La4+nxDjtbcz9csyT8IcBI+L7jFVJ+7g0B9b/8LbQQSjdvFLykHwsAwd+jLPJSLWEA4O/cI2q+oieOhvHb8BUuVI/l1DBTQAAAAASUVORK5CYII="
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
