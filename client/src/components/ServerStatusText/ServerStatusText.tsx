import React, { ReactElement } from "react";
import classNames from "classnames";

interface Props {
  message: string;
  status: string;
}

const defaultClass = "text-center py-2 font-semibold";

function ServerStatusText({ message, status }: Props): ReactElement {
  const statusClass = classNames(defaultClass, {
    "text-red-500": status[0] === "5",
    "text-green-500": status[0] === "2",
  });

  return (
    <div>
      <p className={statusClass}>{message}</p>
    </div>
  );
}

export default ServerStatusText;
