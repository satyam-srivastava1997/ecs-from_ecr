variable "AWS_ACCESS_KEY" {}
variable "AWS_SECRET_KEY" {}
variable "AWS_REGION" {
  default = "us-east-1"
}

variable "ECS_INSTANCE_TYPE" {
  default = "t2.micro"
}
