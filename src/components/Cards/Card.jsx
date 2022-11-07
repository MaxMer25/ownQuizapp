import { useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Cardcomponent from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import useLocalStorage from "../../hooks/useLocalStorage";

function Card() {
  const [answer, toggledAnswer] = useState(false);

  function toggleAnswer() {
    toggledAnswer(!answer);
  }

  return (
    <Cardcomponent className="question-card" sx={{ maxWidth: 345 }}>
      <CardHeader action={<BookmarkIcon />}></CardHeader>
      <CardContent>
        <div class="question-card__question">Beispielfrage</div>
        <Button onClick={toggleAnswer} variant="contained">
          {answer ? "Hide Answer" : "Show Answer!"}
        </Button>

        <div className={answer ? "unspoiled" : "spoiler"}>Beispielantwort</div>
        <footer class="question-card__footer">
          <div class="tag">
            <ul class="tag-list">
              <li>tag</li>
              <li>tag</li>
              <li>tag</li>
            </ul>
          </div>
        </footer>
      </CardContent>
    </Cardcomponent>
  );
}

export default Card;
