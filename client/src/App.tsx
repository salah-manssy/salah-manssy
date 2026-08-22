/** Design reminder: Terminal pédagogique vivant — one portal, two clearly separated learner routes. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ScienceChapterComparison from "./pages/ScienceChapterComparison";
import CourseYear from "./pages/CourseYear";
import NotFound from "./pages/NotFound";
import ScienceTemplateReview from "./pages/ScienceTemplateReview";
import ScienceChapterTemplateReviewHD from "./pages/ScienceChapterTemplateReviewHD";
import ScienceYear from "./pages/ScienceYear";

function Router() {
  return <Switch>
      <Route path="/" component={Home} />
      <Route path="/cours-sciences-3e/chapitre-1" component={ScienceChapterComparison} />
    <Route path="/annee/1">{() => <CourseYear year={1} />}</Route>
    <Route path="/annee/2">{() => <CourseYear year={2} />}</Route>
    <Route path="/sciences/3" component={ScienceYear} />
    <Route path="/maquettes-sciences" component={ScienceTemplateReview} />
    <Route path="/maquettes-sciences-chapitre-1" component={ScienceChapterTemplateReviewHD} />
    <Route component={NotFound} />
  </Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="dark"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
