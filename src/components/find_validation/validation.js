import "./validation.css";
import React, { useState } from "react";


export function validation_Enter(value) {
  if (value == "" || value != "not_selected") {
    if (value) {
      if (!value.startsWith(" ")) {
        if (value.length <= 232) {
          return {
            class: "pass",
          };
        } else
          return {
            class: "warn",
            msg: (
              <>
                <small class="lastname_warning"></small>
              </>
            ),
          };
      } else
        return {
          class: "warn",
          msg: (
            <>
              <small class="enter_space">Cannot start with empty space</small>
            </>
          ),
        };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="enter_required">Required</small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}

export function validation_Search(value) {
  if (value == "" || value != "not_selected") {
    if (value) {
      if (!value.startsWith(" ")) {
        if (value.length <= 232) {
          return {
            class: "pass",
          };
        }
        return {
          class: "warn",
          msg: (
            <>
              <small class="warning"></small>
            </>
          ),
        };
      } else
        return {
          class: "warn",
          msg: (
            <>
              <small class="search_space">Cannot start with empty space</small>
            </>
          ),
        };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="search_required">Required</small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}

export function validation_Replace(value) {
       

  if (value == "" || value != "not_selected") {
    if (value) {
      if (!value.startsWith(" ")) {
        if (value.length <= 232) {
          return {
            class: "pass",
          };
        }
        return {
          class: "warn",
          msg: (
            <>
              <small class="warning"></small>
            </>
          ),
        };
      } else
        return {
          class: "warn",
          msg: (
            <>
              <small class="replace_space">Cannot start with empty space</small>
            </>
          ),
        };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="replace_required">Required</small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";


}
