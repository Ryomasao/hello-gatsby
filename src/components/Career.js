import React, { useState } from "react"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { Reveal } from "react-genie"

import CombatPower from "./CombatPower"

export default ({ children, status = {}, skills = [] }) => {
  const [showPower, setShowPower] = useState(false)

  return (
    <div css={{ marginBottom: "30px" }}>
      <Reveal delay={1000} onShowDone={() => setShowPower(true)}>
        <div css={{ display: "flex", alignItems: "center" }}>
          <div css={{ width: "50%" }}>{children}</div>
          <div css={{ width: "50%", textAlign: "center" }}>
            {showPower && (
              <React.Fragment>
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
                      key={index}
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
              </React.Fragment>
            )}
          </div>
        </div>
      </Reveal>
    </div>
  )
}
