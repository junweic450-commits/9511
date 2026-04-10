import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { IssueSelectionPage } from "./pages/IssueSelectionPage";
import { RightsCheckerPage } from "./pages/RightsCheckerPage";
import { ResultsPage } from "./pages/ResultsPage";
import { GuidancePage } from "./pages/GuidancePage";
import { ComplaintTemplatePage } from "./pages/ComplaintTemplatePage";
import { HelpPage } from "./pages/HelpPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/issue-selection",
    Component: IssueSelectionPage,
  },
  {
    path: "/rights-checker",
    Component: RightsCheckerPage,
  },
  {
    path: "/results",
    Component: ResultsPage,
  },
  {
    path: "/guidance",
    Component: GuidancePage,
  },
  {
    path: "/complaint-template",
    Component: ComplaintTemplatePage,
  },
  {
    path: "/help",
    Component: HelpPage,
  },
]);
