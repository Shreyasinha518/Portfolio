import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2024–2028',
    title: 'TECHNO MAIN SALT LAKE',
    subtitle: 'B.Tech CSE · CGPA 8.47/10',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: 'HACKATHONS',
    title: 'SMART INDIA HACKATHON',
    subtitle: 'National finalist · 10+ events',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: 'DEBATE',
    title: 'OXFORD DEBATE',
    subtitle: 'Winner · 10+ debates',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: 'LEADERSHIP',
    title: 'GMUN',
    subtitle: 'Finalist · Top 10 college GD',
    position: 'left',
  }
];