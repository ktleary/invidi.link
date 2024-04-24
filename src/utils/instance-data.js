import { statusMessage } from "./message";
import { STATUS } from "../constants";
import { nth } from "lodash";

/*
the shape of the instance data response has changed in a recent updatd from the remote
server. we will use the following excerpt as a reference to refactor the code:

[
  [
    "invidious.fdn.fr",
    {
      "flag": "🇫🇷",
      "region": "FR",
      "stats": {
        "version": "2.0", // <-- we can keep this
        "software": {
          "name": "invidious",
          "version": "2024.04.14-8097d81f",
          "branch": "master"
        },
        "openRegistrations": true,
        "usage": {
          "users": {
            "total": 35385,
            "activeHalfyear": 7168,
            "activeMonth": 1182
          }
        },
        "metadata": {
          "updatedAt": 1713828607,
          "lastChannelRefreshedAt": 1713828586
        },
        "playback": {
          "totalRequests": 4167,
          "successfulRequests": 1778,
          "ratio": 0.43
        }
      },
      "cors": true,
      "api": true,
      "type": "https",
      "uri": "https://invidious.fdn.fr",
      "monitor": {
        "token": "so3l",
        "url": "https://invidious.fdn.fr",
        "alias": "invidious.fdn.fr",
        "last_status": 200, // <-- this is the new field to check and implement now
        "uptime": 100.0, // <-- we may consider using something like uptime > 90 if needed
        "down": false,
        "down_since": null,
        "up_since": "2024-04-22T19:11:47Z",
        "error": null,
        "period": 300,
        "apdex_t": 1.0,
        "string_match": "An alternative front-end to YouTube",
        "enabled": true,
        "published": true,
        "disabled_locations": [],
        "recipients": [],
        "last_check_at": "2024-04-22T23:26:09Z",
        "next_check_at": "2024-04-22T23:31:08Z",
        "created_at": "2024-04-21T20:49:56Z",
        "mute_until": "forever",
        "favicon_url": "https://invidious.fdn.fr/favicon-16x16.png?v=e0ce59d3",
        "custom_headers": {},
        "http_verb": "GET/HEAD",
        "http_body": "",
        "ssl": {
          "tested_at": "2024-04-22T23:16:13Z",
          "expires_at": "2024-07-10T17:13:05Z",
          "valid": true,
          "error": null
        }
      }
    }
  ],
  [
    "vid.puffyan.us",
    /...

  the former version looked like this:

  [
  [
    "invidious.snopyta.org",
    {
      flag: "🇫🇮",
      region: "FI",
      stats: {
        version: "2.0",
        software: {
          name: "invidious",
          version: "2020.12.08-eea6f5c",
          branch: "master",
        },
        openRegistrations: true,
        usage: {
          users: {
            total: 4488,
            activeHalfyear: 3626,
            activeMonth: 1252,
          },
        },
        metadata: {
          updatedAt: 1607512530,
          lastChannelRefreshedAt: 1607506720,
        },
        openRegistration: true,
      },
      type: "https",
      uri: "https://invidious.snopyta.org/",
      monitor: {
        monitorId: 782758961,
        createdAt: 1558969602,
        statusClass: "success",
        name: "invidious.snopyta.org",
        url: null,
        type: "HTTP(s)",
        dailyRatios: [{ ratio: "100.00", label: "success" }],
        "90dRatio": { ratio: "99.672", label: "warning" },
        "30dRatio": { ratio: "99.977", label: "warning" },
      },
    },
  ],
  [
    "yewtu.be",
    /...

    */

const getVersionStatusClassUri = (instanceData) => {
  const vitals = nth(instanceData, 1);
  const { stats, monitor, uri } = vitals || {};
  // note that in the new response the statusClass is not in the vitals object
  // lets instead use last_status === 200
  const { last_status: lastStatus } = monitor || {};
  const { version } = stats || {};
  return { version, lastStatus, uri };
};

const getSuccessUris = (acc, instanceData) => {
  const { version, lastStatus, uri } = getVersionStatusClassUri(instanceData);
  return version && lastStatus === 200 ? [...acc, uri] : acc;
};

const processInstancesData = (instancesData = []) =>
  Array.isArray(instancesData) ? instancesData.reduce(getSuccessUris, []) : [];

function parseInstancesResult(result) {
  if (result.error) {
    return [statusMessage({ type: STATUS.BADDATA }), []];
  }

  const instances = processInstancesData(result);
  let message = statusMessage({
    type: STATUS.INSTANCESAVAILABLE,
    quantity: instances?.length || 0,
  });

  return [message, instances];
}

export { parseInstancesResult, processInstancesData };
