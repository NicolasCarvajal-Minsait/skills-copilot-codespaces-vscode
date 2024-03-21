function skillsMember() {
  return {
    name: 'skillsMember',
    restrict: 'E',
    templateUrl: 'app/member/skills/skills.html',
    controller: 'SkillsController',
    controllerAs: 'skillsCtrl',
    bindToController: true
  };
}