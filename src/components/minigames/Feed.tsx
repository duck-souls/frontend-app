import banana from "../../img/minigames/feed_banana.png";
import chicken from "../../img/minigames/feed_chicken.png";
import cob from "../../img/minigames/feed_cob.png";
import egg from "../../img/minigames/feed_egg.png";
import fish from "../../img/minigames/feed_fish.png";
import pizza from "../../img/minigames/feed_pizza.png";
import point from "../../img/minigames/point.png";
import burger from "../../img/minigames/feed_burger.png";
import duckSit from "../../img/minigames/duck_sit.png";

import { useState, useRef, useEffect } from "react";

const Feed = ({ setGameEndProps }) => {
  const itemRef = useRef<HTMLImageElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const foodsArray = [banana, chicken, cob, egg, fish, pizza, burger];
  const [image, setImage] = useState(
    foodsArray[Math.floor(Math.random() * foodsArray.length)]
  );
  useEffect(() => {
    if (!itemRef.current) return;
    const item = itemRef.current;

    let currentDroppable;
    let shiftX, shiftY;

    item.onmousedown = function (event) {
      shiftX = event.clientX - item.getBoundingClientRect().left;
      shiftY = event.clientY - item.getBoundingClientRect().top;
      item.style.position = "absolute";
      item.style.zIndex = "1000";
      document.body.append(item);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        setPosition({
          x: pageX - shiftX,
          y: pageY - shiftY,
        });
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        item.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        item.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest(".droppable");
        if (currentDroppable !== droppableBelow) {
          if (currentDroppable) {
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) {
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener("mousemove", onMouseMove);

      item.onmouseup = function () {
        document.removeEventListener("mousemove", onMouseMove);
        item.onmouseup = null;
      };
    };

    function enterDroppable(elem) {
      elem.style.background = "pink";
      setGameEndProps(true);
    }

    function leaveDroppable(elem) {
      elem.style.background = "";
    }

    item.ondragstart = function () {
      return false;
    };
  }, []);

  return (
    <div
      id="container"
      className='h-[310px] w-[310px] mx-auto mt-4 p-2 bg-[url("../template/background_minigame_feed.png")] bg-cover'
    >
      <img src={point} className="animate-bounce mt-10 ml-10" />
      <img src={duckSit} id="duck" className="droppable mt-14 ml-14" />
      <img
        id="food"
        src={image}
        ref={itemRef}
        style={{
          left: position.x + "px",
          top: position.y + "px",
        }}
      />
    </div>
  );
};

export default Feed;
