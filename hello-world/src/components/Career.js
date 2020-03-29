import React from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import CombatPower from "./CombatPower"

export default ({ title, children, status = {}, skills = [] }) => {
  return (
    <div>
      <h2 css={{ margin: 0 }}>{title}</h2>
      <div css={{ display: "flex", alignItems: "center" }}>
        <div css={{ width: "50%" }}>{children}</div>
        <div css={{ width: "50%", textAlign: "center" }}>
          <h4>戦闘力(自分調べ)</h4>
          <CombatPower {...status} />
          <div
            css={{
              width: "60%",
              margin: " 30px auto 0 auto",
            }}
          >
            <h4>経験したWebに必要な技術スタック</h4>
            {skills.length === 0 && <p>とくになし😫</p>}
            <div css={{ display: "flex", flexWrap: "wrap" }}>
              {skills.map((skill, index) => (
                <label
                  css={{
                    display: "inline-block",
                    border: `3px solid ${skill.color}`,
                    borderRadius: "10px",
                    marginTop: "4px",
                    marginRight: "4px",
                    padding: "2px 8px",
                  }}
                >
                  {skill.label}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
