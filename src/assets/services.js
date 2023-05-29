import React from "react"
import {
  GiCompass,
  GiDiamondHard,
  GiStabbedNote,
  GiBriefcase,
} from "react-icons/gi"
export default [
  {
    id: 1,
    icon: <GiCompass className="service-icon" />,
    label: "Integrate with payment gateways",
    text:
      "Connect your store with popular payment gateways or let customers pay offline. ",
  },
  {
    id: 2,
    icon: <GiDiamondHard className="service-icon" />,
    label: "Set up your shipping and taxes",
    text:
      " Display location-specific tax rates and shipping options in your store.",
     },
  {
    id: 3,
    icon: <GiStabbedNote className="service-icon" />,
    label: "Add your products",
    text:
      "Add or import your products, including descriptions, specifications, and images.",
  },
  {
    id: 4,
    icon: <GiBriefcase className="service-icon" />,
    label: "pick your template",
    text:
      "Our templates are designed for easy navigation on any device to ensure a great shopping experience.",
  },
]